/**
Constructor
*/
class MainView extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

		//TODO:edit here
		const testData = [
			'테스트 데이터 1', '테스트 데이터 2', '테스트 데이터 3', '테스트 데이터 4', '테스트 데이터 5'
		]
		
		this.sampleDropBox.addItem(testData);
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

window["MainView"] = MainView