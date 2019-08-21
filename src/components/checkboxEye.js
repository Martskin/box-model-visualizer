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
				svg: {
					display: 'inline-block',
					marginRight: tokens.space.xxs,
					verticalAlign: 'middle',
				}
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
					'& + svg': {
						color: tokens.icon.color.secondary,
					},
					'& + svg + svg': {
						display: 'none',
					},
					':checked': {
						'& + svg': {
							display: 'none',
						},
						'& + svg + svg': {
							display: 'inline-block',
						}
					},
					':not(:checked)': {
						'& + svg + svg + span': {
							color: tokens.color.text.secondary,
						}
					},
					':focus': {
						'& + svg, & + svg + svg': {
							outline: `1px solid ${tokens.border.color.interactive.default}`,
							outlineOffset: 1,
						}
					}
				})}
			/>
			<IconEyeClosed />
			<IconEye />
			{label && (
				<span>{label}</span>
			)}
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
