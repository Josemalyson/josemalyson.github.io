---
sidebar_position: 1
---

# Entendo GenAI
Com o uso do NLP (Natural Language Processing) podemos ter algumas ações que podem ser realiadas sendo elas: Text summarization, Text generation, Question answering systems, Agents.

## Text summarization
Como o proprío nome nos trás referência, podemos resumir ou filtrar grandes quantidades de informações utilizando o modelo de LLM ou os FMs (Modelos fundacionais), nos ajudando há entender informações chaves sobre um determinado assunto de forma limpa e objetiva.

## Text generation
Nesse cenário temos a opção de contextualizar os modelos com o objetivo de gerar novos argumentos como resposta, trazendo uma geração mais realista da linguagem humana e melhorando a compreensão de dados, utilizamos as tecnicas que inclue o uso do LangChain e do Retrieval Augmented Generation (RAG) com a persistecia de embeddings para contextualizar nosso modelo.

## Question answering systems
Basicamente essa opção é a saídas das informações montadas pelo Text generation dando a possibilidade do usuário interagir via modelo de implementação como um chatbot, para entender e buscar informações dadas ao seu contexto.

## Agents
São capazes de entender a linguagem natural requistitadas pelo usuário para disponibilizar chamadas via API facilitando a complexidade de tarefas de acesso direto ao modelo. O serviço de prompt engineering especifico de uma company-specific ou domain-specific. No Amazon Bedrock os agentes podem gerenciar infraestrutura, monitoramento, criptografia, permissões e invocações senm customização de código.

Componentes tipicos de uma aplicação com generative AI (Application Components)
alt text
FONTE
https://explore.skillbuilder.aws/learn/course/17904/play/94135/module-2-application-components

## Foundation Models (Modelos Fundacionais ) e FM Interface
### Foundation model interface
As interfaces funcionais de modelo são o coração da generative AI, ou seja os próprios modelos treinanos com uma enorme escala de dados, são disponibilizados para atender a um determinado requisito do usuário.

alt text
FONTE
https://explore.skillbuilder.aws/learn/course/17904/play/94135/module-2-application-components

### Interface and prompts
Para que seja possível acessar o modelo é necessário que seja fornecido uma interface de (entrada) dados, geralmente temos a disponibilização de APIs, onde a mesma através de uma requisição é capaz de trazer as respostas enviadas via prompt.

### Inference parameters
Durante o uso de prompts, efetivamente os Inference parameters causam uma forte influência no output dos Foundation model. As LLMs operam com o uso de token, que podem ser palavaras, letras ou apenas uma parte de uma frase.

Mil tokens são aproximadamente 750 palavras.

### Top P or nucleus sampling
Neste controle de tecnica é resposável por escolher a menor probabilidade de combinação de acertividade para o próximo token. Uma alto valor par o Top P como 0.9 pode tornar o resultado o mais deterministico e previsivél. Com valores menores pode trazer tokens incoerentes então é essencial balancear o seu valor.

### Top K
Top K, reduz o tamanho do próximo tokens. Tipicamente os valores 10 para 100, o valor de 1 é chamado de greedy strategy, porque provavelmente o token mais provavél é sempre escolhido.

### Temperature
Enquanto o Top P and Top K controlam o qual tokens são escolhidos baseados no output dos modelos, o parametro de temperature afeta a saída do modelo diretamente.

Quando o valor dessa temperatura é alto, a distribuição da probabilidade de conhecimento dos tokens deveria ser uniforme, tornando a resposta dos tokens gerados, mais criativos e uniformes.

Quando o valor dessa temperatura é baixo, com uma distribuição polarizada, se tem saídas possíveis mais deterministicas.

## Enterprise Datasets
Apesar dos Foundation Models poderem gerar textos humanos, imagens, audios dos prompts escritos, isso não é o suficiente para gerar os casos de usos de negócio. Pois para se gerar algo relevante ao negócio da empresa, é necessário que se conheça os dados internos acumulados, exemplos disso seria: documentos, aparesentações, manuais de usuáios, relatórios, textos sumarizados, áudios transcritos e etc.

Para a ingestão e utilização desses recursos fornecidos para o Foundation Models, são conhecidos como domain-specific, ou seja, outputs altamente relevantes para a negócio.

### Embeddings
Embeddings é um processo no quais os texos, imagens e audios são numéricamente representados em um espaço de vetor. Embeddings geralmente são utilizados em técnicas de modelo de machine learning.

alt text
FONTE
https://explore.skillbuilder.aws/learn/course/17904/play/94135/module-2-application-components

Para os Enterprise Datasets, como os documentoss, imagens e audios, são passadas para o ML models com tokens e são vetorizados. Estes vetores estão são os n-dimensional space, ou seja alocados em um determinado espaço onde estes dados., são armazenados em vector databases para que seja possível obter uma resposta rápida.

Basicamente a busca semantica de um token é feita através de textos similares em um espaço do vetor muilti-dimensioal.

Um exemplo de provide é o Amazon Titan Embeddings G1.

### Vector databases
O core funcional dos vector databases é o compactamento do armazenamento de bilhões de vetores high-dimensional representados por palavras ou entidades. Esses databases fornecem uma ultra velocidade na busca similar de dados. Pecorrendo bilhões de vetores em tempo real.

Os algoritmos mais comuns utilizados são o k-nearest neighbors (k-NN) or cosine similatrity.

A AWS oferece os seguintes opções de vectors databases:

- Amazon OpenSearch Service (provisioned)
- Amazon OpenSearch Serverless
- pgvector extension in Amazon Relational Database Service (Amazon RDS) for PostgreSQL
- pgvector extension in Amazon Aurora PostgreSQL - Compatible Edition

A AWS também oferece soluções open source como:

- Pinecone
- FAISS
- Chroma

### Vectorized enterprise data

Depois que os dados de negócios estão vetorizados, você pode procurar via prompt os dados armazendados. Com os famosos chunks de informações como um contexto fornecido para o seu modelo de AI generativo, evitando assim as alucinações. Vector Databases e context são usados em Retrieval Augmented Generation (RAG).

### Additional Application Components
Prompt history store
O armazenamento dos históricos de prompts, são um componente essencial para as aplicações de generative AI, particulamente usado para aplicações de chatbots. O armazenamento dos prompts ajudam a contextualizar as conversas com assuntos relevantes e coerentes.

Muitos Foundation Models, tem um limite para o context window, que podem receber como entrada dados menores.

Então as vezes conversas muito longas podem ser armazenadas e utilizadas em futuras conversas como contexto.

alt text
FONTE
https://explore.skillbuilder.aws/learn/course/17904/play/94135/module-2-application-components

Com isso é possível que as respostas dos prompts possam ser previstas , evitando assim repetições de requests semelhantes para o Foundation Models. Ajudando também como uma politica de auditoria e compliance onde um time de auditores é capaz de analisar e regular erros causados por respostas indevidas.

## RAG
RAG é um framework de construção de generative AI que pode ser usado por recusos empresariais ou vector database para superar problemas de limitação de conhecimento de um modelo.

O Funcionamento do RAG e utiliar o retrivever modelue para encontrar informações relevantes de uma base de daods external, responde o usuário através de prompts.

Seguindo o conceito de few-short aqui podemos dizer que ao recuperar os dados de uma base de informações adicionamos ela como contexto no proprío prompt do usuário, fazendo com que o modelo entenda e amplie sua base de informações.

Exemplo:

alt text
Perceba que o modelo foi atualizado em janeiro de 2022 porém conseguiu inferir através de dados adicionais a informação da data correta, com isso temos talvez aqui um exemplo de RAG na prática.

### RAG visualmente
alt text

Sempre que o usuário faz uma interação com o o Foundation Model (modelo ou llm) a um acrescimo de informação adicionada no prompt antes mesmo da requisição chegar no modelo, ou seja, a informação é pesquisada dentro do vector database e enviada junto com o prompt do usuário.

### Model Fine-Tuning
Algumas limitações do RAG são evidentes:

Respostas limitadas ao seu datasets armazenados em sesus data vectors

Consulta de informações em runtime, trazendo maior latências em alguns cenários.

Porém quando utilizamos o Fine-Tuning, podemos criar/treinar modelos menores com conhecimentos especifico e espescializado. Hoje temos duas categorias de fine-tuning:

### Prompt-based learning e Domain adaptation

### Prompt-based learning
Basicamente aqui você ensina o modelo a compreender os assuntos com uma rotulação especifica, mostrando exemplos através de pares de respostas e prompts como criar frases e instruções.

Devido a seu uso ser especializado para uma unica fonte de dados com abordagem especifica, ele não é recomendado a ser usado como um modelo de multi tarefas.

### Domain adaptation
