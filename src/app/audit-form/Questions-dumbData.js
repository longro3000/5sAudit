export default [
	{
		"checkItemID": 1,
		"checkItem": "floor",
		"checkItemDescription": "Is the working floor clear of materials except for those that are in use to production ?",
		"auditPhase": "SORT",
		"status": "ACTIVE"
	},
	{
		"checkItemID": 2,
		"checkItem": "work items",
		"checkItemDescription": "Are all the working items available?",
		"checkItemAnswer": "AVERAGE",
		"auditPhase": "SORT",
		"status": "ACTIVE"
	},
	{
		"checkItemID": 3,
		"checkItem": "Tool & equipment proximity",
		"checkItemDescription": "Are all the tools and equipment close to proximity ?",
		"checkItemAnswer": "AVERAGE",
		"auditPhase": "ORDER",
		"status": "ACTIVE"
	},
	{
		"checkItemID": 4,
		"checkItem": "Tool & equipment location",
		"checkItemDescription": "Are all the tools and equipment located logically in using frequency ?",
		"auditPhase": "ORDER",
		"status": "ACTIVE"
	},
	{
		"checkItemID": 5,
		"checkItem": "Workspace cleanliness",
		"checkItemDescription": "Is the workplace clean and pleasing to work in ?",
		"auditPhase": "SHINE",
		"status": "ACTIVE"
	},
	{
		"checkItemID": 6,
		"checkItem": "Workspace safety and easiness",
		"checkItemDescription": "Is the workplace safe and easy to work in ?",
		"auditPhase": "SHINE",
		"status": "ACTIVE"
	},
	{
		"checkItemID": 7,
		"checkItem": "Personels responsibility",
		"checkItemDescription": "Are all the personel know the practices to maintain the work place ?",
		"auditPhase": "STANDARDIZE",
		"status": "ACTIVE"
	},
	{
		"checkItemID": 8,
		"checkItem": "Reviewing",
		"checkItemDescription": "Review the status of 5S implementation regularly using audit checklists",
		"auditPhase": "STANDARDIZE",
		"status": "ACTIVE"
	},
	{
		"checkItemID": 9,
		"checkItem": "Trainning session",
		"checkItemDescription": "Is everyone adequately trained in standard procedure ?",
		"auditPhase": "SUSTAIN",
		"status": "ACTIVE"
	},
	{
		"checkItemID": 10,
		"checkItem": "Activity boards",
		"checkItemDescription": "Are activities board up-to-date and regularly reviewed ?",
		"auditPhase": "SUSTAIN",
		"status": "ACTIVE"
	}
]