import { Prisma, PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    name: "name",
    model: {
      $allModels: {
        async softDelete<T>(this: T, where: Prisma.Args<T, "update">["where"]) {
          const context = Prisma.getExtensionContext(this);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- There is no way to type a Prisma model
          const result = (context as any).update({
            where,
            data: {
              deletedAt: new Date(),
            },
          });
          return result;
        },
      },
    },
    query: {
      $allModels: {
        async findMany({ model, operation, args, query }) {
          args.where = { ...args.where, deletedAt: null };
          return await query(args);
        },
        async create({ args, query }) {
          // Trim all string values in args.data
          for (const key in args.data) {
            // @ts-expect-error impli any
            if (typeof args.data?.[key] === "string") {
              // @ts-expect-error impli any
              args.data[key] = args.data[key].trim();
            }
          }

          return await query(args);
        },
      },
    },
  });
};

declare global {
  // eslint-disable-next-line no-var
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
