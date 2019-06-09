import Colors from "./Colors";

export default {
	iOS: {
		activeTintColor: Colors.primary,
		inactiveTintColor: Colors.mild,
		style: {
			height: 56,
			backgroundColor: Colors.warning,
			shadowColor: "rgba(0, 0, 0, 0.24)",
			shadowOffset: {
				width: 0,
				height: 3
			},
			shadowRadius: 6,
			shadowOpacity: 1
		}
	},
	android: {
		activeTintColor: Colors.light,
		indicatorStyle: {
			height: 5,
			backgroundColor: Colors.info
		},
		labelStyle: {
			fontSize: 15
		},
		style: {
			height: 56,
			backgroundColor: Colors.warning,
			shadowColor: "rgba(0, 0, 0, 0.24)",
			shadowOffset: {
				width: 0,
				height: 3
			},
			shadowRadius: 6,
			shadowOpacity: 1
		}
	}
};
