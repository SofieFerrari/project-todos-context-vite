import React from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { CheckList } from './components/CheckList'
import { CheckListProvider } from './contexts/CheckListContext'

export const App = () => {
	return (
		<CheckListProvider>
			<Header />
			<Input />
			<CheckList />
		</CheckListProvider>
	)
}
