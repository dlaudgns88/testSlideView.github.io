/**
Constructor
*/
class ExADropBox extends ADropBox
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
	
		const thisObj = this;
	
		const click = () => {
		
			thisObj.windowOpen();
		};
		this.element.addEventListener('click', click);
	
		this.data = null;
		this.selectData = null;
	}
	

	windowOpen()
	{
		const thisObj = this;
		const cntr = this.getContainer().getView();
		let wnd = new AWindow();
		
		wnd.setWindowOption({
			isModal : true,
			isFocusLostClose : true,
			modalBgOption : 'dark'
		});
		
		wnd.setResultCallback(function(res){
			if(!res) return;
			thisObj.setEditText(res);
		})
		
		
		const screenWidth = cntr.getWidth();
		const screenHeight = cntr.getHeight();

		
		const promise = new Promise(function(resolve, reject) {
			resolve();
		});
		promise
			.then(function(){
						
				wnd.open('Source/testPage01.lay', cntr, 0, 800, screenWidth, 800);
			
			
			})
			.then(function(){
				thisObj.dropBoxDataSet(wnd);
			})
			.then(function(){

				thisObj.windowSlide(wnd, screenHeight)

			})

	}
	dropBoxDataSet(wnd)
	{
		wnd.getView().listView.addItem('Source/testPage02.lay', this.data)
		
	}
	
	windowSlide(wnd, screenHeight)
	{
				
		let y = 0;
		const slideViewHeight = screenHeight * 0.7;
	
		
		function move()
		{
			
			
			if( y <= slideViewHeight) {
		
				y += 40;
			
				wnd.$ele.children()[0].children[0].acomp.setHeight(y);
				wnd.element.style.top = 800 - y + 'px'; 
				
				window.requestAnimationFrame(move);
				

			}
		}
		
		window.requestAnimationFrame(move);
		
	}
	
	addItem(data)
	{
		this.data = data;
		
		
	}
}

window["ExADropBox"] = ExADropBox







