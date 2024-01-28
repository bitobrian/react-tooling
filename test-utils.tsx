import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    const divStyle = {
        backgroundColor: "blue"
    };
    return <div style={divStyle}>{children}</div>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
