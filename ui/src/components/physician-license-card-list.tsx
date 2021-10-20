import { FC } from "react";
import { Card, List } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

interface ILicense {
  physicianRegAuthorityRef: number;
  orgName: string;
  licenseNumber: string;
}
interface ILicenseCardList {
  licenses: ILicense[];
  onListChangedCallback?: (licenses: ILicense[]) => void;
  isEditable: boolean;
}

export const LicenseCardList: FC<ILicenseCardList> = (props) => {
  const onDeleteLicense = (
    physicianRegAuthorityRef: any,
    licenseNumber: any
  ) => {
    const newLicenses = props.licenses.slice();
    const i = newLicenses.findIndex(
      (l) =>
        l.physicianRegAuthorityRef === physicianRegAuthorityRef &&
        l.licenseNumber === licenseNumber
    );
    newLicenses.splice(i, 1);
    props.onListChangedCallback!(newLicenses);
  };
  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 2,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 6,
        }}
        dataSource={props.licenses}
        renderItem={(item) => (
          <List.Item>
            <Card style={{ border: "solid 1px black" }}>
              <CloseCircleOutlined
                style={{
                  display: props.isEditable ? "inherit" : "none",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
                onClick={() =>
                  onDeleteLicense(
                    item.physicianRegAuthorityRef,
                    item.licenseNumber
                  )
                }
              />

              <div style={{ fontSize: "0.7rem" }}>
                <em>Authority:</em>
              </div>
              <div>
                <b>{item.orgName}</b>
              </div>
              <div style={{ fontSize: "0.7rem" }}>
                <em>License/Registration Number:</em>
              </div>
              <div>
                <b>{item.licenseNumber}</b>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

LicenseCardList.defaultProps = {
  licenses: [],
  onListChangedCallback: () => {
    // default function
  },
  isEditable: true,
};
