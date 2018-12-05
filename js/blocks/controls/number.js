const { TextControl } = wp.components;

const BlockLabNumberControl = ( props, field, block ) => {
	const { setAttributes } = props;
	const attr = { ...props.attributes };
	return (
		<TextControl
			type="number"
			label={field.label}
			placeholder={field.placeholder || ''}
			help={field.help}
			defaultValue={field.default}
			value={attr[ field.name ]}
			onChange={numberControl => {
				attr[ field.name ] = numberControl
				setAttributes( attr )
			}}
			onFocus={ event => {
				event.target.reportValidity()
			}}
			onBlur={ event => {
				if ( ! event.target.checkValidity() ) {
					let input = Object.assign({},event).target
					setTimeout(() => input.focus(), 10);
				}
			}}
		/>
	)
}

export default BlockLabNumberControl