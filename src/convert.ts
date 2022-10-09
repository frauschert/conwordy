import { length, Length } from './length';
import { mass, Mass } from './mass';
import { velocity, Velocity } from './velocity';

const units = { ...length, ...mass, ...velocity }

type Unit = keyof typeof units;

export function convert(value: number, source: Velocity, target: Velocity): number;
export function convert(value: number, source: Mass, target: Mass): number;
export function convert(value: number, source: Length, target: Length): number;
export function convert(value: number, source: Unit, target: Unit): number {
    return value / units[source].scale * units[target].scale;
}

export default convert;