import "antd/dist/antd.css";
import "./index.css";
import { Steps } from "antd";
//import { useState } from "react";

interface Props {
  currentStep?: number;
  status?: string;
  onChange?: () => {};
  steps?: {
    title?: string;
    subTitle?: string;
    description?: string;
    status?: string;
  }[];
}

export const Wizard = (props: Props) => {
  const { Step } = Steps;
  // const [currentStep, setCurrentStep] = useState(1)
  return (
    <div className="wizard">
      <Steps current={props.currentStep} onChange={props.onChange}>
        {props.steps?.map((step, i) => {
          return (
            <Step
              title={step.title ?? String(i + 1)}
              subTitle={step.subTitle ?? ""}
              description={step.description ?? ""}
             // status={props.status ?? "process"}
            />
          );
        })}
      </Steps>
    </div>
  );
};
