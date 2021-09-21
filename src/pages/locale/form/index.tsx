
import BasicSideBar from "../../../components/Basic-side-bar";
import Setting from "../../initial/setting/index";

interface FormProps {}
const LocaleForm = (props: FormProps) => {
  return (
    <div>
      <BasicSideBar>
        <Setting />
      </BasicSideBar>
    </div>
  );
};
export default LocaleForm;
