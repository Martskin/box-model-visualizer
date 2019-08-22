import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import tokens from "../data/tokens"
import IconEye from "./iconEye"
import IconEyeClosed from "./iconEyeClosed"

function CheckboxEye({ checked, label, ariaLabel, onChange }) {

	return (
		<label
			css={css({
				cursor: 'pointer',
				display: 'block',
				fontSize: tokens.font.size.xs,
				fontWeight: 'normal',
				lineHeight: 1,
				margin: `0 0 ${tokens.space.xxs}px`,
				userSelect: 'none',
				svg: {
					display: 'inline-block',
					marginRight: tokens.space.xxs,
					verticalAlign: 'middle',lineHeight: 1,
				},
				'> div': {
					borderRadius: tokens.border.radius.interactive,
					padding: tokens.space.xxxs,
				},
			})}
		>
			<input
				aria-label={ariaLabel}
				type="checkbox"
				onChange={onChange ? (e) => onChange(e.target.checked) : null}
				checked={checked}
				css={css({
					clip: 'rect(1px, 1px, 1px, 1px)',
					overflow: 'hidden',
					position: 'absolute',
					height: '1px',
					width: '1px',
					'& + div svg': {
						color: tokens.icon.color.secondary,
					},
					'& + div svg + svg': {
						display: 'none',
					},
					':checked': {
						'& + div svg': {
							display: 'none',
						},
						'& + div svg + svg': {
							display: 'inline-block',
						}
					},
					':not(:checked)': {
						'& + div svg + svg + span': {
							color: tokens.color.text.secondary,
						}
					},
					':focus': {
						'& + div': {
							boxShadow: tokens.shadow.focus,
						}
					}
				})}
			/>
			<div>
				<IconEyeClosed />
				<IconEye />
				{label && (
					<span>{label}</span>
				)}
			</div>
		</label>
	)
}

export default CheckboxEye

CheckboxEye.propTypes = {
	checked: PropTypes.bool,
	label: PropTypes.string,
	ariaLabel: PropTypes.string,
	onChange: PropTypes.func,
}

CheckboxEye.defaultProps = {
	checked: false,
	label: undefined,
	ariaLabel: undefined,
	onChange: undefined,
}
