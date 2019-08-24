() => {
    const [text, setText] = React.useState("")

    React.useEffect(() => {
        //window.document.title = `${text} Component`
        window.document.title = "WHY React"
    });

    return (
        <>
            <p>{text} Component</p>
            <input
                onChange={e => setText(e.target.value)}
                value={text}/>
        </>
    )
}