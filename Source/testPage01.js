/**
Constructor
*/
class testPage01 extends AView
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

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

	onListViewSelect(comp, info, e)
	{
		console.log(comp);
		//TODO:edit here

	}

	onListViewSelect(comp, info, e)
	{

		//TODO:edit here
		const selectData = this.listView.getSelectItem().itemData;
	
		
		this.getContainer().close(selectData);
	}

}

window["testPage01"] = testPage01