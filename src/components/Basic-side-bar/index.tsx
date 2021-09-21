import { useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import "./style.css";
import { X } from "react-feather";
const { Sider } = Layout;

interface BasicSideBarProps {
  footer?: any;
  header?: any;
  toggle?: () => {};
}

const BasicSideBar: React.FC<BasicSideBarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={isOpen}
        collapsedWidth={0}
        width={700}
        style={{
          zIndex: 1,
          position: "absolute",
          background: "none",
          boxShadow:
            " 0 5px 40px 0 rgb(0 6 5 / 35%), 0 6px 20px 0 rgb(0 0 0 / 20%) ",
        }}
      >
        {/* header */}
        <div className="form-header">
          <X
            style={{
              color: "gray",
              backgroundColor: "rgb(249 242 242)",
              width: "2rem",
              height: "2rem",
              margin: "1rem",
              borderRadius: ".5rem",
              boxShadow: "rgba($color: #fff, $alpha: 0.5) 0.2rem 0.1rem 0.3rem",
              transform: "translateY(-.5rem)",
              cursor: "pointer",
            }}
            size={20}
            onClick={() => {
              toggle();
            }}
          />
        </div>
        {/* form */}
        {/* pass togle */}
        <div className="form">{props.children}</div>
        {/* footer */}
        <div className="form-footer">
          {props.footer ? (
            <div className="data-list-sidebar-footer pl-1 pb-2 d-flex justify-content-start align-items-center">
              {props.footer}
            </div>
          ) : (
            <>ITLand@Footer.com</>
          )}
        </div>
      </Sider>

      {/* <Layout className="layout">
        <button onClick={toggle}>open</button>
      </Layout> */}
    </Layout>
  );
};
export default BasicSideBar;
