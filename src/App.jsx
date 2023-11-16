import './App.css'

function App() {

	return (
		<div className='min-h-screen flex flex-col justify-center w-full'>
			<div className='response flex flex-col justify-center w-full'>
				
			</div>
			<div className='sticky bottom-0'>
				<textarea autoFocus autoCorrect="true" rows={1} tabIndex={0} placeholder='Message ChatGPT…' className='rounded-lg m-0 w-full resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-4 md:pr-12 gizmo:md:py-3.5 gizmo:placeholder-black/50 gizmo:dark:placeholder-white/50 pl-3 md:pl-4' style={{maxHeight: "200px", height:"52px", overflowY: "hidden", border: "1px solid white"}}></textarea>
				<p className='text-xs'>ChatGPT can make mistakes. Consider checking important information.</p>
			</div>
		</div>
	);
}

export default App;


{/* <textarea id="prompt-textarea" tabindex="0" data-id="request-:R3apdm:-1" rows="1" placeholder="Message ChatGPT…" class="m-0 w-full resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-4 md:pr-12 gizmo:md:py-3.5 gizmo:placeholder-black/50 gizmo:dark:placeholder-white/50 pl-3 md:pl-4" style="max-height: 200px; height: 52px; overflow-y: hidden;"></textarea> */}