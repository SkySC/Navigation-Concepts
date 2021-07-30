import styled from 'styled-components'
import { useState } from 'react'

import AlertDialog from './components/AlertDialog/AlertDialog'
import FullDialog from './components/FullscreenDialog/FullDialog'
import FormDialog from './components/FormDialog/FormDialog'
import SimpleDialog from './components/SimpleDialog/SimpleDialog'

import ActivateDialogButton from './components/ActivateDialogButton'

import './App.css'

const ContentWrapper = styled.div`
	position: absolute;

	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	margin: auto;

	background: linear-gradient(to right, #d3cce3, #e9e4f0);
	width: 80vw;
	height: 90vh;

	box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.4);
	border-radius: 20px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`

const App = () => {
	const [currentDialog, setCurrentDialog] = useState('none')

	console.log(`Current Dialog: ${currentDialog}`)

	return (
		<ContentWrapper>
			<ActivateDialogButton
				onClick={() => setCurrentDialog('alert')}
				dialogOpen={currentDialog !== 'none' ? true : false}>
				Slide In Alert Dialog
			</ActivateDialogButton>
			<ActivateDialogButton
				onClick={() => setCurrentDialog('full')}
				dialogOpen={currentDialog !== 'none' ? true : false}>
				Full Screen Dialog
			</ActivateDialogButton>
			<ActivateDialogButton
				onClick={() => setCurrentDialog('form')}
				dialogOpen={currentDialog !== 'none' ? true : false}>
				Form Dialog
			</ActivateDialogButton>
			<ActivateDialogButton
				onClick={() => setCurrentDialog('simple')}
				dialogOpen={currentDialog !== 'none' ? true : false}>
				Simple Dialog
			</ActivateDialogButton>

			<AlertDialog
				dialogOpen={currentDialog === 'alert' ? true : false}
				handle={setCurrentDialog}>
				Klicke auf "Zustimmen", um die neuen Nutzungsbebdingungen zu
				akzeptieren und unseren Service weiter nutzen zu können.
			</AlertDialog>
			<FullDialog
				dialogOpen={currentDialog === 'full' ? true : false}
				handle={setCurrentDialog}
			/>
			<FormDialog
				dialogOpen={currentDialog === 'form' ? true : false}
				handle={setCurrentDialog}>
				Tippe deine Email ein, um heute noch ein kostenloses Probierset
				im Wert von 35€ zu erhalten. Gleichzeitig meldest du dich damit
				für unseren Newsletter an.
			</FormDialog>
			<SimpleDialog
				dialogOpen={currentDialog === 'simple' ? true : false}
				handle={setCurrentDialog}
			/>
		</ContentWrapper>
	)
}

export default App
