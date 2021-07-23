import {useEffect, useState} from 'react'
import { useRouter} from "next/router";
import MsgItem from "./MsgItem";
import MsgInput from './MsgInput';
import fetcher from '../fetcher';

const UserIds = ['roy', 'jay']
const getRandomUserId = () => UserIds[Math.round(Math.random())]


console.log(JSON.stringify([]))

const MsgList = () => {
    const [msgs, setMsgs] = useState([])
    const [editingId, setEditingId] = useState(null)
    const {query: {userId = ''}} = useRouter()

    const onCreate = async text => {
        const newMsg = await fetcher('post', '/messages',{text, userId })
       if(!newMsg) throw Error('something wrong')
        setMsgs(msgs => ([newMsg, ...msgs]))
        console.log(msgs)
    }

    const onUpdate = async (text,id) => {
      const newMsg = await fetcher('put', `/messages/${id}`, {text, userId})
       if(!newMsg) return
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id)
            if(targetIndex < 0) return msgs
            const newMsgs = [...msgs]
            newMsgs.splice(targetIndex, 1, newMsg)
            return newMsgs
        })
        doneEdit()
    }

    const onDelete = async id => {
        const receviedid = await fetcher('delete', `/messages/${id}`, { params: {userId}})
        setMsgs(msgs => {
        const targetIndex = msgs.findIndex(msg => msg.id === receviedid)
        if(targetIndex < 0) return msgs
        const newMsgs = [...msgs]
        newMsgs.splice(targetIndex, 1)
        return newMsgs
        })
    }

    const doneEdit = () => setEditingId(null)

    const getMessages = async () => {
        const msgs = await fetcher('get', '/messages')
        setMsgs(msgs)

    }
    useEffect(() => {
       getMessages()
    } , [])

    return(
    <>
        <MsgInput mutate={onCreate}/>
        <ul className= "messages">
            {msgs.map(x => (
                <MsgItem
                    key={x.id}
                    {...x}
                    onUpdate={onUpdate}
                    onDelete={() =>onDelete(x.id)}
                    startEdit={() => setEditingId(x.id)}
                    isEditing={editingId === x.id}
                />
            ))}
        </ul>
    </>
    )
}

export default MsgList