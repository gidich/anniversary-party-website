import React, { FC, useState, useEffect } from "react";
import {
  Descriptions,
  Card,
  Row,
  Col,
  Tooltip,
  Button,
  Space,
  Popconfirm,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import PropTypes, { InferProps } from "prop-types";
import moment from "moment";
import { gql } from "@apollo/client";

export const AuthorityFragment = gql`
  fragment AuthorityFragment on AuthorityType {
    _id
    data {
      regulatoryAuthorityRef {
        _id
        orgName
        countryName
      }
      licenseIssueDate
      licenseExpiryDate
      isCurrentlyLicensed
      hasDisciplinaryAction
      licensureDocumentStatus
    }
  }
`;

const DATE_FORMAT = "DD-MMM-YYYY";

export interface IAuthority {
  __typename: string;
  _id: string;
  data: {
    regulatoryAuthorityRef: {
      _id: string;
      orgName: string;
      countryName: string;
    };
    licenseIssueDate: Date;
    licenseExpiryDate: Date;
    isCurrentlyLicensed: boolean;
    hasDisciplinaryAction: boolean;
    licensureDocumentStatus: string;
  };
}
interface IAuthorityCardProps {
  onDelete: (id: string) => {};
  onEdit: (id: string) => {};
  displayValues: IAuthority;
}

export const AuthorityCard: FC<IAuthorityCardProps> = ({
  onDelete,
  onEdit,
  displayValues,
}) => {
  const countryName = displayValues.data.regulatoryAuthorityRef.countryName;
  const orgName = displayValues.data.regulatoryAuthorityRef.orgName;
  return (
    <div className="space-align-block">
      <Card size="small" className={"authorityCard"} id={displayValues._id}>
        {/* org name */}
        <Descriptions
          className={"ecfmg-small-descriptions"}
          title={orgName}
          size="small"
          layout="vertical"
          bordered={false}
          column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
        >
          {/* country Name */}
          <Descriptions.Item label="Country">{countryName}</Descriptions.Item>
          <Descriptions.Item label="Date">
            {moment(displayValues.data.licenseIssueDate).format(DATE_FORMAT)}
          </Descriptions.Item>
          <Descriptions.Item label="Current">
            {displayValues.data.isCurrentlyLicensed ? "Yes" : "No"}
          </Descriptions.Item>
          <Descriptions.Item label="Disciplinary Action">
            {displayValues.data.hasDisciplinaryAction ? "Yes" : "No"}
          </Descriptions.Item>
        </Descriptions>
        <Row>
          <Col span="24" style={{ textAlign: "right" }}>
            <Space>
              <Tooltip title="Edit">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={() => onEdit && onEdit(displayValues._id)}
                />
              </Tooltip>

              <Popconfirm
                title="Are you sure you want to delete this?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => onDelete && onDelete(displayValues._id)}
              >
                <Tooltip title="Delete">
                  <Button shape="circle" icon={<DeleteOutlined />} />
                </Tooltip>
              </Popconfirm>
            </Space>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
