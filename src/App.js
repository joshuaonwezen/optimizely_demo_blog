import * as React from "react";
import Blog from "./Blog";
import {
  createInstance,
  OptimizelyProvider,
  useDecision,
  enums,
} from "@optimizely/react-sdk";

export default function App() {
  const optimizely = createInstance({
    sdkKey: "XKkRw1SWTRnp5WXmVMYdB",
  });

  const onDecision = ({ type, userId, attributes, decisionInfo }) => {
    var dataLayerObject = window["dataLayer"] || [];
    console.log(decisionInfo);
    dataLayerObject.push({
      event: "decision_optimizely_fx",
      optimizely_experiment: decisionInfo.ruleKey,
      optimizely_variant: decisionInfo.variationKey,
    });
  };

  const notificationId = optimizely.notificationCenter.addNotificationListener(
    enums.NOTIFICATION_TYPES.DECISION,
    onDecision
  );
  
  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{ id: "user123", attributes: { country: "NL", logged_in: "true", purchases: "undefined", device: "mobile" } }}
    >
      <Blog />
    </OptimizelyProvider>
  );
}
