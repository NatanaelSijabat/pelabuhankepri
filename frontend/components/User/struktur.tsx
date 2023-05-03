import React, { useState, useEffect, ReactElement } from "react";
import { Card, Image } from "antd";

function MyComponent(): ReactElement {
  const [chartComponent, setChartComponent] = useState<ReactElement | null>(
    null
  );

  useEffect(() => {
    import("react-organizational-chart").then((module) => {
      const { Tree, TreeNode } = module;

      setChartComponent(
        <div className=" p-20">
          <div className="">
            <Tree
              lineStyle=""
              lineHeight="100px"
              lineWidth={"2px"}
              lineColor={"black"}
              lineBorderRadius={"10px"}
              label={
                <Card
                  cover={<Image src="/direktur.png" />}
                  className="container bg-secondary w-1/2"
                >
                  <Card.Meta description="KOMISARIS" />
                </Card>
              }
            >
              <TreeNode
                label={
                  <Card cover={<Image src="/direktur.png" />}>
                    <Card.Meta description="DIREKTUR" />
                  </Card>
                }
              >
                <TreeNode
                  label={
                    <Card cover={<Image src="/direktur.png" />}>
                      <Card.Meta description="GENERAL MANAGER" />
                    </Card>
                  }
                />
                <TreeNode
                  label={
                    <Card cover={<Image src="/direktur.png" />}>
                      <Card.Meta description="DEPARTEMEN KEPELABUNAN DAN MARITIM" />
                    </Card>
                  }
                />
                <TreeNode
                  label={
                    <Card cover={<Image src="/direktur.png" />}>
                      <Card.Meta description="DEPARTEMEN PENGEMBANGAN BISNIS DAN KOMERSIL" />
                    </Card>
                  }
                />
                <TreeNode
                  label={
                    <Card cover={<Image src="/direktur.png" />}>
                      <Card.Meta description="DEPARTEMEN PERENCANAAN DAN PENGENDALIAN OPERASIONAL" />
                    </Card>
                  }
                />
                <TreeNode
                  label={
                    <Card cover={<Image src="/direktur.png" />}>
                      <Card.Meta description="DEPARTEMEN ADMINISTRASI DAN KEUANGAN" />
                    </Card>
                  }
                >
                  <TreeNode label="Ok" />
                </TreeNode>
              </TreeNode>
            </Tree>
          </div>
        </div>
      );
    });
  }, []);

  if (!chartComponent) {
    return <div>Loading...</div>;
  }

  return chartComponent;
}

export default MyComponent;
