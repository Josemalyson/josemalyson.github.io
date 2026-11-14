---
title: "21 · Verificação local"
sidebar_label: "21 · Verificação local"
description: "5. Verificação Objetivo Rodar as checagens que o CI também roda. Entrada Raiz do repositório. Comando exato text gofmt -l . go vet ./... go test…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "tutoriais/passo-20"
pagination_next: "tutoriais/passo-22"
---

*5. Verificação*

### Objetivo

Rodar as checagens que o CI também roda.

### Entrada

Raiz do repositório.

### Comando exato

```text
gofmt -l .
go vet ./...
go test -v ./...
go build -o /tmp/demo-saldo .
/tmp/demo-saldo &
sleep 1
curl -s localhost:8080/contas/0001/saldo
kill %1
```

### Resultado esperado [REAL]

```text
=== RUN   TestRunServeAPI
<data> <hora> demo-saldo ouvindo em 127.0.0.1:40153
--- PASS: TestRunServeAPI (0.03s)
=== RUN   TestRunPortaOcupada
--- PASS: TestRunPortaOcupada (0.00s)
=== RUN   TestSaldoHandler
=== RUN   TestSaldoHandler/conta_com_saldo_positivo
=== RUN   TestSaldoHandler/conta_com_saldo_negativo
=== RUN   TestSaldoHandler/conta_inexistente
=== RUN   TestSaldoHandler/id_inválido
=== RUN   TestSaldoHandler/método_não_permitido
--- PASS: TestSaldoHandler (0.00s)
    --- PASS: TestSaldoHandler/conta_com_saldo_positivo (0.00s)
    --- PASS: TestSaldoHandler/conta_com_saldo_negativo (0.00s)
    --- PASS: TestSaldoHandler/conta_inexistente (0.00s)
    --- PASS: TestSaldoHandler/id_inválido (0.00s)
    --- PASS: TestSaldoHandler/método_não_permitido (0.00s)
PASS
ok  	demo-saldo	0.029s
<data> <hora> demo-saldo ouvindo em :8080
{"conta_id":"0001","saldo_centavos":150000,"limite_centavos":50000,"limite_disponivel_centavos":200000}
```

### Artefatos

Nenhum novo.

### Checkpoint

gofmt e go vet sem saída; todos os casos PASS, inclusive os dois testes de run(). Saída capturada com a implementação de referência do ensaio; nomes de teste variam com o código gerado.

### Doc oficial

[go vet](https://pkg.go.dev/cmd/vet)

·

[go test](https://pkg.go.dev/cmd/go)

·

[Go: table-driven tests](https://go.dev/wiki/TableDrivenTests)

·

[net/http/httptest](https://pkg.go.dev/net/http/httptest)

·

[net/http ServeMux (padrões com método e &#123;id&#125;)](https://pkg.go.dev/net/http#ServeMux)

**main() fino e run() testável:** para a cobertura do pacote inteiro passar do limiar padrão de 90% sem exceção, o `main.go` da referência só chama `run(addr)`; `main_test.go` testa `run` servindo a API e falhando com a porta ocupada. Cobertura medida pelo hook: 95,5%.


```text
package main

import (
    "log"
    "net"
    "net/http"
)

// main fica fino: toda a lógica testável está em run.
func main() {
    log.Fatal(run(":8080"))
}

// run abre a porta e serve a API; só retorna com erro (porta ocupada, por exemplo).
func run(addr string) error {
    ln, err := net.Listen("tcp", addr)
    if err != nil {
        return err
    }
    log.Printf("demo-saldo ouvindo em %s", addr)
    return http.Serve(ln, novoMux())
}
```


Guia de bolso: [passo 21 no guia BMAD](/guias/bmad/passo-21/).

[← 20 · Loop de autocorreção no commit do agente](/playbook/ai-first/tutoriais/passo-20)

[22 · Code review independente →](/playbook/ai-first/tutoriais/passo-22)
