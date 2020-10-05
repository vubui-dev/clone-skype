import { DashboardUser } from "components/DashboardUser/DashboardUser";
import { LeftSideSection } from "components/LeftSideSection/LeftSideSection";
import OpenConversation from "components/OpenConversation/OpenConversation";
import { useConversationContext } from "contexts/useConversationContext";
import React from "react";

export const Dashboard = () => {
  const { recentConversation } = useConversationContext();

  console.log("hello");
  return (
    <div className="d-flex h-100 w-100">
      <LeftSideSection />
      {recentConversation ? <OpenConversation /> : <DashboardUser />}
    </div>
  );
};
