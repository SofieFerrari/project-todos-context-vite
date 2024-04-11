import React from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { ChecklistInput } from './components/ChecklistInput'
import { CheckListProvider } from './contexts/CheckListContext'
import { CheckButton } from './components/CheckButton'
import { ItemList } from './components/ItemList'
import moment from 'moment';

export const App = () => {
	return (
		<CheckListProvider>
			<Header />
			<Input />
			<ChecklistInput />
			<CheckButton />
			<ItemList />
		</CheckListProvider>
	)
}
