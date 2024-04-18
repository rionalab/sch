"use client";

import { Anchor, Col, Row } from "antd";
import SimpleBar from "simplebar-react";
import styles from "./styles.module.scss";

function Page() {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={6} className={styles.anchor}>
          <Anchor
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: "Payment Guideline",
              },
              {
                key: "part-2",
                href: "#part-2",
                title: "Parents Declaration",
              },
              {
                key: "part-3",
                href: "#part-3",
                title: "Site Policy",
              },
            ]}
          />
        </Col>

        <Col span={18}>
          <SimpleBar className={styles.simplebar}>
            <div id="part-1">
              <h3>Payment Guideline</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                commodi quis provident dolore, accusamus assumenda ullam facilis
                veniam nisi vero numquam. Ipsa pariatur repellat non perferendis
                harum expedita, saepe cumque.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                minima aspernatur aliquid quae hic nam deserunt similique
                officiis reprehenderit laudantium nostrum quisquam placeat,
                error quos facilis temporibus neque perspiciatis at?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                corporis error quam voluptate sunt adipisci dolore ipsum,
                suscipit veritatis deleniti quos, esse ea a nesciunt vero
                aspernatur pariatur voluptatibus ullam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Doloremque aperiam quasi
                facere consequuntur quia vitae! Sequi quas, animi dolor quod
                quae reiciendis qui ipsa quis consequatur velit harum at
                architecto?
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt necessitatibus aperiam alias odio explicabo ex
                molestiae ipsam repudiandae laborum cum aliquid aspernatur
                quaerat, distinctio amet. Dolore in optio facere asperiores.
              </p>
            </div>

            <div id="part-2">
              <h3>Parents Declaration</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                commodi quis provident dolore, accusamus assumenda ullam facilis
                veniam nisi vero numquam. Ipsa pariatur repellat non perferendis
                harum expedita, saepe cumque.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                minima aspernatur aliquid quae hic nam deserunt similique
                officiis reprehenderit laudantium nostrum quisquam placeat,
                error quos facilis temporibus neque perspiciatis at?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                corporis error quam voluptate sunt adipisci dolore ipsum,
                suscipit veritatis deleniti quos, esse ea a nesciunt vero
                aspernatur pariatur voluptatibus ullam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Doloremque aperiam quasi
                facere consequuntur quia vitae! Sequi quas, animi dolor quod
                quae reiciendis qui ipsa quis consequatur velit harum at
                architecto?
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt necessitatibus aperiam alias odio explicabo ex
                molestiae ipsam repudiandae laborum cum aliquid aspernatur
                quaerat, distinctio amet. Dolore in optio facere asperiores.
              </p>
            </div>

            <div id="part-3">
              <h3>Site Policy</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                commodi quis provident dolore, accusamus assumenda ullam facilis
                veniam nisi vero numquam. Ipsa pariatur repellat non perferendis
                harum expedita, saepe cumque.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                minima aspernatur aliquid quae hic nam deserunt similique
                officiis reprehenderit laudantium nostrum quisquam placeat,
                error quos facilis temporibus neque perspiciatis at?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                corporis error quam voluptate sunt adipisci dolore ipsum,
                suscipit veritatis deleniti quos, esse ea a nesciunt vero
                aspernatur pariatur voluptatibus ullam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Doloremque aperiam quasi
                facere consequuntur quia vitae! Sequi quas, animi dolor quod
                quae reiciendis qui ipsa quis consequatur velit harum at
                architecto?
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt necessitatibus aperiam alias odio explicabo ex
                molestiae ipsam repudiandae laborum cum aliquid aspernatur
                quaerat, distinctio amet. Dolore in optio facere asperiores.
              </p>
            </div>
          </SimpleBar>
        </Col>
      </Row>
    </div>
  );
}

export default Page;
