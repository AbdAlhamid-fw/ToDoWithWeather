import "antd/dist/antd.css";
import { Button, Layout } from "antd";
import "./style.css";
import { X } from "react-feather";
const { Sider } = Layout;

interface BasicSideBarProps {
  footer?: any;
  header?: any;
  toggle?: () => {};
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setTypeAction: (value: string) => void;
}

const BasicSideBar: React.FC<BasicSideBarProps> = ({
  footer,
  header,
  isOpen,
  setIsOpen,
  children,
  setTypeAction,
}) => {
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={!isOpen}
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
          {isOpen ? (
            <X
              style={{
                color: "gray",
                backgroundColor: "rgb(249 242 242)",
                width: "2rem",
                height: "2rem",
                margin: "1rem",
                borderRadius: ".5rem",
                boxShadow:
                  "rgba($color: #fff, $alpha: 0.5) 0.2rem 0.1rem 0.3rem",
                transform: "translateY(-.5rem)",
                cursor: "pointer",
              }}
              size={20}
              onClick={() => {
                setIsOpen(false);
                setTypeAction("add")
              }}
            />
          ) : (
            <Button
              type="primary"
              shape="circle"
              onClick={() => {
                setIsOpen(true);
                setTypeAction("add");
              }}
              style={{
                color: "white",
                background: "radialGradient(rgb(255 255 255 / 53%))",
                width: "2rem",
                height: "2rem",
                margin: "1rem",
                borderRadius: ".5rem",
                boxShadow:
                  "rgba($color: #fff, $alpha: 0.5) 0.2rem 0.1rem 0.3rem",
                transform: "translateY(-.5rem)",
                cursor: "pointer",
              }}
            >
              Add
            </Button>
          )}
        </div>
        {/* form */}
        {/* pass togle */}
        <div className="form">{children}</div>
        {/* footer */}
        <div className="form-footer">
          {footer ? (
            <div className="data-list-sidebar-footer pl-1 pb-2 d-flex justify-content-start align-items-center">
              {footer}
            </div>
          ) : (
            <>ITLand@Footer.com</>
          )}
        </div>
      </Sider>
    </Layout>
  );
};
export default BasicSideBar;
