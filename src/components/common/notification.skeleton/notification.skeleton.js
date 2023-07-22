import { Paper, Skeleton } from "@mui/material";
import React from "react";

function NotificationsSkeleton(props) {
  return (
    <div>
      {/* <Skeleton variant="text" width={80} /> */}
      <Paper className="d-flex paper-root align-items-center justify-content-between p-2 w-100">
        <div className="d-flex mb-2">
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={300} className="ml-3" />
          <Skeleton variant="text" width={250} className="ml-3" />
          <Skeleton variant="text" width={300} className="ml-3" />
          <Skeleton variant="text" width={250} className="ml-3" />
          <Skeleton variant="text" width={100} className="ml-3" />
        </div>
      </Paper>
    </div>
  );
}

export default NotificationsSkeleton;
