import { Card } from "antd";
import { FC } from "react";
import orangeLeaf from "../images/leaf-orange.png";
import brownLeaf from "../images/leaf-brown.png";
import greenLeaf from "../images/leaf-green.png";
import blueLeaf from "../images/leaf-blue.png";

export interface ILeafProps {
  /** Color of the leaf */
  color: LEAVE_COLORS;
  /** Name of the leaf */
  name: string;
}

/** Color enum of the leaf */
export enum LEAVE_COLORS {
  Orange = "orange",
  Blue = "blue",
  Green = "green",
  Brown = "brown",
}
export const Leaf: FC<ILeafProps> = ({ color, name }) => {
  const getLeafByColor = (leafColor: LEAVE_COLORS) => {
    let src = "";
    switch (leafColor) {
      case LEAVE_COLORS.Blue:
        src = blueLeaf;
        break;
      case LEAVE_COLORS.Brown:
        src = brownLeaf;
        break;
      case LEAVE_COLORS.Green:
        src = greenLeaf;
        break;
      case LEAVE_COLORS.Orange:
        src = orangeLeaf;
        break;
    }
    return <img src={src} alt="image of a leaf" />;
  };
  return (
    <>
      <Card
        title={name}
        bordered
        style={{ border: "1px solid black", textAlign: "center" }}
      >
        {getLeafByColor(color)}
      </Card>
    </>
  );
};
