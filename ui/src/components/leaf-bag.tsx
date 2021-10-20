import { List } from 'antd';
import { FC } from 'react';
import { ILeafProps, Leaf } from './Leaf';

interface ILeafBagProps {
    leaves: ILeafProps[];
    loading: boolean;
}
export const LeafBag: FC<ILeafBagProps> = ({ leaves, loading }) => {
    return (
        <>
            <List
                dataSource={leaves}
                grid={{
                    gutter: 16,
                    xs: 4,
                    sm: 4,
                    md: 4,
                    lg: 4,
                    xl: 4,
                    xxl: 4,
                }}
                loading={loading}
                renderItem={(item) => (
                    <List.Item>
                        <Leaf
                            key={item.name}
                            color={item.color}
                            name={item.name}
                        />
                    </List.Item>
                )}
            ></List>
        </>
    );
};
