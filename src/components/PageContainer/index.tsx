import { FC } from "react";
import "./styles.scss";

interface IProps {
  children: React.ReactNode;
}

const PageContainer: FC<IProps> = (props) => {
  const { children } = props;

  return <div className="page-container">{children}</div>;
};

export default PageContainer;
