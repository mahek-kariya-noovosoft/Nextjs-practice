"use client";

import {Client, IMessage} from "@stomp/stompjs";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "@/store/messagesSlice";
import type {RootState} from "@/store/store";

export default function Home() {
    const dispatch = useDispatch();
    const messages = useSelector((state: RootState) => state.messages);

    const clientRef = useRef<Client | null>(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const client = new Client({
            brokerURL: "ws://localhost:15674/ws",
            heartbeatIncoming: 0,
            heartbeatOutgoing: 0,

            onConnect: () => {
                setConnected(true);

                client.subscribe("/topic/test01", (message: IMessage) => {
                    dispatch(addMessage(message.body));
                });

            },

            onDisconnect: () => {
                setConnected(false);
            },
        });

        client.activate();
        clientRef.current = client;

        return () => {
            client.deactivate()
        };
    }, [dispatch]);

    const sendMessage = () => {
        if (!connected) return;

        clientRef.current!.publish({
            destination: "/topic/test01",
            body: "Hello again ⚡",
        });
    };

    return (
        <div style={{padding: 40}}>
            <h2>STOMP Live Messages</h2>

            <button disabled={!connected} onClick={sendMessage}>
                {connected ? "Send Message" : "Connecting..."}
            </button>

            <ul>
                {messages.map((m, i) => (
                    <li key={i}>{m}</li>
                ))}
            </ul>
        </div>
    );
}
