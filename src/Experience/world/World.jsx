import modelsData from "../../libs/modelsData";
import Model from "./Model";

export default function World(props) {
  return (
    <group {...props}>
      {modelsData.map((model) => (
        <Model key={model.name} item={model} />
      ))}
    </group>
  );
}
