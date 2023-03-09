import React, {useRef} from "react";
import { Mesh } from "three";

export default function Sphere(props: any): JSX.Element {

    const ref = useRef<Mesh>(null!);

    return (
        <mesh
            {...props}
            ref={ref}
        >
            <sphereGeometry args={[0.75, 64, 64]} />
            <meshStandardMaterial color="lightblue" />
        </mesh>
    )
};