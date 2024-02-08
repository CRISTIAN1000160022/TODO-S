import React from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";
import "./LoadingSpinner";

function TodosLoading() {
  return (
    <div className="loading" >
      <div className="loading-overlay">
        <RingLoader
          color="#123abc"
          loading={true}
          css={css`
            display: block;   
          `}
          size={100}
        />
      </div>
    </div>
  );
};

export { TodosLoading };
