import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

const useModelResources = (model) => {
  const { nodes } = useMemo(() => {
    return useGLTF("/world.glb");
  }, []);

  const resources = useMemo(() => {
    if (!model) return null;
    // Only return node by model name
    const node = nodes[model];
    return node ? node : null;
  }, [model, nodes]);

  return resources;
};

useGLTF.preload("/world.glb");

export default useModelResources;
