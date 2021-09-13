import "antd/dist/antd.css";
import "./index.css";
import { Steps } from "antd";

interface Props {}

export const Wizard = (props: Props) => {
  const { Step } = Steps;
  return (
    <div>
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      ,
    </div>
  );
};
