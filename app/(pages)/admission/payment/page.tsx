'use client'

import React from "react";
import { Anchor, Row, Col } from 'antd';

function Page() {
  return <div style={{ background: "red"}}>

<Row>
    <Col span={6}>
    <Anchor
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
    
    <Col span={18} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore laboriosam totam consequuntur, quidem necessitatibus facere nostrum fuga. Autem in dolorem explicabo doloribus eos quam eveniet amet alias aliquid at!
    </Col>
    </Row>

    

  </div>;
}

export default Page;
