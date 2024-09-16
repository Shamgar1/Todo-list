import renderer from "react-test-renderer";
import listItemComponent from "../ListItemComponent";

describe("render snapshots", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<listItemComponent />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("renders correctly with name", () => {
		const tree = renderer
			.create(<listItemComponent name={"blabla"} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("renders correctly with name", () => {
		const tree = renderer
			.create(<listItemComponent name={"blabla"} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
