// arquivo que consegue configurar qual documento e qual formato do documento por volta da aplicação
// fica por volta de toda a aplicação mas a diferença é que o _document é chamado somente uma vez, e o _app é chamado sempe que há alterações

import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" /> 
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}