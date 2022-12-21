export type AcceptsStyle<P = unknown> = P & {
	style?: import('@emotion/serialize').SerializedStyles
}
