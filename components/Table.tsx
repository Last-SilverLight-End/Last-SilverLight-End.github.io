import { css } from '@emotion/react'
import type { AcceptsStyle } from 'global'

// content , 내용들
export const Cell: React.FC<React.PropsWithChildren & AcceptsStyle> = (props) =>
	<div css={props.style}>
		{props.children}
	</div>

// title , 내용의 제목
export const Head: React.FC<React.PropsWithChildren> = ({ children }) =>
	<Cell style={css`
		text-align: center;
		font-weight: bold;
	`}>
		{children}
	</Cell>

export const Row: React.FC<React.PropsWithChildren> = ({ children }) =>
	<>{children}</>

type TableProps = React.PropsWithChildren & AcceptsStyle & {
	width: number
}
export const Table: React.FC<TableProps> = (props) =>
	<div css={css`
		display: grid;
    margin-right: auto;
    //width: 100%;
		grid-template-columns: repeat(${props.width}, minmax(min-content, max-content));
		max-width: 100%;
		${props.style};
	`}>
		{props.children}
	</div>
