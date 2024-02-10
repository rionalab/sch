  const [loadingEdit, setLoadingEdit] = useState(false);
    setLoadingEdit(true);
    setLoadingEdit(false);
      {loadingEdit && <LoadingModule />}
      className={loadingEdit ? "dNone" : ""}
      import { ButtonForm, LoadingModule } from "@/c";



      <Form.Item<FormFields>
      label="Active"
      name="status"
      rules={fieldRules(["required"])}
    >
      <Select options={trueFalseOptions} />
    </Form.Item>




    <Form.Item<FormFields> hidden={!id} label="Code" name="code">
    <Input disabled />
  </Form.Item>


  code: formValue.id ? formValue.code : code("SPP", Number(lastId) + 1),



  const lastRow = await prisma.vendor.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  const lastId = lastRow?.id ?? 1;