import React from "react";
import cs from "classnames";

export const Icon = ({ name, className }) => {
	return <i className={cs("fas", name, className)}></i>;
};
