import { ref, Ref } from "@vue/composition-api";

interface UseStyles {
	[key: string]: string;
}
function useStylesAsCreated(styles: string): Ref<UseStyles> {
	let stylesObject: UseStyles = {};
	function toHump(styleValues: string) {
		return styleValues.replace(/\-(\w)/g, (_, val) => val.toUpperCase());
	}
	const stylesArr = styles
		.split(";")
		.map(v => v.replace(/[\r\n]/g, "").replace(/\s+/g, ""))
		.filter(v => v.length > 0)
		.map(v => toHump(v));
	stylesArr.forEach(v => {
		const styleFragment = v.split(":");
		const key = styleFragment[0];
		const val = styleFragment[1];
		stylesObject[key] = val;
	});
	return ref(stylesObject);
}

function useStylesAsChanged(styles: Ref<UseStyles>, newStyles: string): void {
	const newStylesArr = useStylesAsCreated(newStyles).value;
	styles.value = { ...styles.value, ...newStylesArr };
}

function useStyles(styles: string): Ref<UseStyles>;
function useStyles(styles: Ref<UseStyles>, newStyles: string): void;
function useStyles(styles: string | Ref<UseStyles>, newStyles?: string) {
	if (arguments.length === 1) {
		return useStylesAsCreated(styles as string);
	} else {
		return useStylesAsChanged(styles as Ref<UseStyles>, newStyles!);
	}
}
export { useStyles };
