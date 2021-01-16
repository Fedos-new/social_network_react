import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";



describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="SUPER STATUS - TEST" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SUPER STATUS - TEST");
    });
    test("after creation <span> whit status should be displayed", () => {
        const component = create(<ProfileStatus status="SUPER STATUS - TEST" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test("after creation <span> whit status shouldn't be displayed", () => {
        debugger
        const component = create(<ProfileStatus status="SUPER STATUS - TEST" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="SUPER STATUS - TEST" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe("SUPER STATUS - TEST");
    });
    test("input should be display in editMode instead of span", () => {
        const component = create(<ProfileStatus status="SUPER STATUS - TEST" />);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe("SUPER STATUS - TEST");
    });
    test("callback should be called", () => {
        const mockCallBack = jest.fn()
        const component = create(<ProfileStatus status="SUPER STATUS - TEST"  updateStatus={mockCallBack} />);
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});
