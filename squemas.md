| table_schema | table_name          | column_name               | data_type                | is_nullable | constraint_type | referenced_schema | referenced_table | referenced_column |
| ------------ | ------------------- | ------------------------- | ------------------------ | ----------- | --------------- | ----------------- | ---------------- | ----------------- |
| business     | carteira_clientes   | id                        | bigint                   | NO          | PRIMARY KEY     | null              | null             | null              |
| business     | carteira_clientes   | empresa_id                | uuid                     | YES         | UNIQUE          | null              | null             | null              |
| business     | carteira_clientes   | empresa_id                | uuid                     | YES         | FOREIGN KEY     | business          | empresas         | id                |
| business     | carteira_clientes   | funcionario_id            | uuid                     | YES         | FOREIGN KEY     | identity          | user_profiles    | id                |
| business     | carteira_clientes   | funcionario_id            | uuid                     | YES         | UNIQUE          | null              | null             | null              |
| business     | carteira_clientes   | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| business     | contratos           | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| business     | contratos           | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| business     | contratos           | empresa_id                | uuid                     | NO          | FOREIGN KEY     | business          | empresas         | id                |
| business     | contratos           | servico_id                | integer                  | NO          | FOREIGN KEY     | business          | servicos         | id                |
| business     | contratos           | vendedor_responsavel_id   | uuid                     | YES         | FOREIGN KEY     | identity          | user_profiles    | id                |
| business     | contratos           | status                    | text                     | YES         | null            | null              | null             | null              |
| business     | contratos           | valor_divida_base         | numeric                  | YES         | null            | null              | null             | null              |
| business     | contratos           | percentual_negociado      | numeric                  | YES         | null            | null              | null             | null              |
| business     | contratos           | valor_honorarios_estimado | numeric                  | YES         | null            | null              | null             | null              |
| business     | contratos           | obs_negociacao            | text                     | YES         | null            | null              | null             | null              |
| business     | empresas            | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| business     | empresas            | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| business     | empresas            | razao_social              | text                     | NO          | null            | null              | null             | null              |
| business     | empresas            | nome_fantasia             | text                     | YES         | null            | null              | null             | null              |
| business     | empresas            | cnpj                      | text                     | NO          | UNIQUE          | null              | null             | null              |
| business     | empresas            | uf                        | character                | YES         | null            | null              | null             | null              |
| business     | empresas            | valor_total_divida        | numeric                  | YES         | null            | null              | null             | null              |
| business     | empresas            | valor_divida_selecionada  | numeric                  | YES         | null            | null              | null             | null              |
| business     | empresas            | natureza_divida           | text                     | YES         | null            | null              | null             | null              |
| business     | empresas            | status_receita            | text                     | YES         | null            | null              | null             | null              |
| business     | empresas            | estagio_negociacao        | text                     | YES         | null            | null              | null             | null              |
| business     | empresas            | obs                       | text                     | YES         | null            | null              | null             | null              |
| business     | empresas            | informacoes               | jsonb                    | YES         | null            | null              | null             | null              |
| business     | empresas_socios     | empresa_id                | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| business     | empresas_socios     | empresa_id                | uuid                     | NO          | FOREIGN KEY     | business          | empresas         | id                |
| business     | empresas_socios     | socio_id                  | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| business     | empresas_socios     | socio_id                  | uuid                     | NO          | FOREIGN KEY     | business          | vm_socios        | id                |
| business     | empresas_socios     | cargo                     | text                     | YES         | null            | null              | null             | null              |
| business     | servicos            | id                        | integer                  | NO          | PRIMARY KEY     | null              | null             | null              |
| business     | servicos            | nome                      | text                     | NO          | null            | null              | null             | null              |
| business     | servicos            | descricao                 | text                     | YES         | null            | null              | null             | null              |
| business     | servicos            | percentual_teto           | numeric                  | YES         | null            | null              | null             | null              |
| business     | vm_contato_site     | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| business     | vm_contato_site     | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| business     | vm_contato_site     | nome                      | text                     | NO          | null            | null              | null             | null              |
| business     | vm_contato_site     | email                     | text                     | NO          | null            | null              | null             | null              |
| business     | vm_contato_site     | telefone                  | text                     | YES         | null            | null              | null             | null              |
| business     | vm_contato_site     | empresa                   | text                     | YES         | null            | null              | null             | null              |
| business     | vm_contato_site     | assunto                   | text                     | YES         | null            | null              | null             | null              |
| business     | vm_contato_site     | mensagem                  | text                     | YES         | null            | null              | null             | null              |
| business     | vm_contato_site     | status                    | text                     | YES         | null            | null              | null             | null              |
| business     | vm_contato_site     | anotacoes_internas        | text                     | YES         | null            | null              | null             | null              |
| business     | vm_socios           | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| business     | vm_socios           | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| business     | vm_socios           | nome_completo             | text                     | NO          | null            | null              | null             | null              |
| business     | vm_socios           | documento                 | text                     | YES         | UNIQUE          | null              | null             | null              |
| business     | vm_socios           | lista_emails              | jsonb                    | YES         | null            | null              | null             | null              |
| business     | vm_socios           | lista_telefones           | jsonb                    | YES         | null            | null              | null             | null              |
| business     | vm_socios           | uf                        | character                | YES         | null            | null              | null             | null              |
| business     | vm_socios           | endereco                  | text                     | YES         | null            | null              | null             | null              |
| business     | vm_socios           | obs                       | text                     | YES         | null            | null              | null             | null              |
| business     | vm_socios           | informacoes               | jsonb                    | YES         | null            | null              | null             | null              |
| cron         | job                 | jobid                     | bigint                   | NO          | null            | null              | null             | null              |
| cron         | job                 | schedule                  | text                     | NO          | null            | null              | null             | null              |
| cron         | job                 | command                   | text                     | NO          | null            | null              | null             | null              |
| cron         | job                 | nodename                  | text                     | NO          | null            | null              | null             | null              |
| cron         | job                 | nodeport                  | integer                  | NO          | null            | null              | null             | null              |
| cron         | job                 | database                  | text                     | NO          | null            | null              | null             | null              |
| cron         | job                 | username                  | text                     | NO          | null            | null              | null             | null              |
| cron         | job                 | active                    | boolean                  | NO          | null            | null              | null             | null              |
| cron         | job                 | jobname                   | text                     | YES         | null            | null              | null             | null              |
| cron         | job_run_details     | jobid                     | bigint                   | YES         | null            | null              | null             | null              |
| cron         | job_run_details     | runid                     | bigint                   | NO          | PRIMARY KEY     | null              | null             | null              |
| cron         | job_run_details     | job_pid                   | integer                  | YES         | null            | null              | null             | null              |
| cron         | job_run_details     | database                  | text                     | YES         | null            | null              | null             | null              |
| cron         | job_run_details     | username                  | text                     | YES         | null            | null              | null             | null              |
| cron         | job_run_details     | command                   | text                     | YES         | null            | null              | null             | null              |
| cron         | job_run_details     | status                    | text                     | YES         | null            | null              | null             | null              |
| cron         | job_run_details     | return_message            | text                     | YES         | null            | null              | null             | null              |
| cron         | job_run_details     | start_time                | timestamp with time zone | YES         | null            | null              | null             | null              |
| cron         | job_run_details     | end_time                  | timestamp with time zone | YES         | null            | null              | null             | null              |
| identity     | user_profiles       | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| identity     | user_profiles       | nome                      | text                     | NO          | null            | null              | null             | null              |
| identity     | user_profiles       | email                     | text                     | YES         | UNIQUE          | null              | null             | null              |
| identity     | user_profiles       | ativo                     | boolean                  | YES         | null            | null              | null             | null              |
| identity     | user_profiles       | user_id                   | uuid                     | YES         | FOREIGN KEY     | null              | null             | null              |
| identity     | user_profiles       | user_id                   | uuid                     | YES         | UNIQUE          | null              | null             | null              |
| identity     | user_profiles       | user_id                   | uuid                     | YES         | FOREIGN KEY     | null              | null             | null              |
| identity     | user_profiles       | role                      | text                     | YES         | null            | null              | null             | null              |
| identity     | user_profiles       | avatar_url                | text                     | YES         | null            | null              | null             | null              |
| identity     | user_profiles       | whatsapp                  | text                     | YES         | null            | null              | null             | null              |
| marketing    | ai_models           | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| marketing    | ai_models           | name                      | text                     | NO          | null            | null              | null             | null              |
| marketing    | ai_models           | model_id                  | text                     | NO          | null            | null              | null             | null              |
| marketing    | ai_models           | provider                  | text                     | YES         | null            | null              | null             | null              |
| marketing    | ai_models           | temperature               | double precision         | YES         | null            | null              | null             | null              |
| marketing    | ai_models           | system_instruction        | text                     | YES         | null            | null              | null             | null              |
| marketing    | ai_models           | status                    | text                     | YES         | null            | null              | null             | null              |
| marketing    | ai_models           | is_default                | boolean                  | YES         | null            | null              | null             | null              |
| marketing    | ai_models           | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | ai_models           | updated_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | ai_models           | deleted_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | channel_accounts    | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| marketing    | channel_accounts    | platform                  | text                     | NO          | null            | null              | null             | null              |
| marketing    | channel_accounts    | username                  | text                     | NO          | null            | null              | null             | null              |
| marketing    | channel_accounts    | password                  | text                     | YES         | null            | null              | null             | null              |
| marketing    | channel_accounts    | status                    | text                     | YES         | null            | null              | null             | null              |
| marketing    | channel_accounts    | last_updated              | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | channel_accounts    | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | channel_accounts    | updated_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | channel_accounts    | deleted_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | creatives           | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| marketing    | creatives           | title                     | text                     | NO          | null            | null              | null             | null              |
| marketing    | creatives           | source                    | USER-DEFINED             | YES         | null            | null              | null             | null              |
| marketing    | creatives           | media_type                | USER-DEFINED             | YES         | null            | null              | null             | null              |
| marketing    | creatives           | url                       | text                     | NO          | null            | null              | null             | null              |
| marketing    | creatives           | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | creatives           | updated_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | creatives           | deleted_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | creatives           | post_id                   | uuid                     | YES         | FOREIGN KEY     | marketing         | posts            | id                |
| marketing    | creatives           | planner_item_id           | uuid                     | YES         | FOREIGN KEY     | marketing         | planner_items    | id                |
| marketing    | planner_items       | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| marketing    | planner_items       | theme                     | text                     | NO          | null            | null              | null             | null              |
| marketing    | planner_items       | planned_date              | date                     | NO          | null            | null              | null             | null              |
| marketing    | planner_items       | channels                  | ARRAY                    | NO          | null            | null              | null             | null              |
| marketing    | planner_items       | format                    | text                     | NO          | null            | null              | null             | null              |
| marketing    | planner_items       | notes                     | text                     | YES         | null            | null              | null             | null              |
| marketing    | planner_items       | completed                 | boolean                  | YES         | null            | null              | null             | null              |
| marketing    | planner_items       | created_by                | uuid                     | YES         | FOREIGN KEY     | marketing         | team_members     | id                |
| marketing    | planner_items       | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | planner_items       | updated_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | planner_items       | deleted_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | posts               | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| marketing    | posts               | production_id             | uuid                     | YES         | FOREIGN KEY     | marketing         | productions      | id                |
| marketing    | posts               | content_index             | integer                  | YES         | null            | null              | null             | null              |
| marketing    | posts               | planner_id                | uuid                     | YES         | FOREIGN KEY     | marketing         | planner_items    | id                |
| marketing    | posts               | channels                  | ARRAY                    | NO          | null            | null              | null             | null              |
| marketing    | posts               | creative_ids              | ARRAY                    | YES         | null            | null              | null             | null              |
| marketing    | posts               | status                    | USER-DEFINED             | YES         | null            | null              | null             | null              |
| marketing    | posts               | author_id                 | uuid                     | YES         | null            | null              | null             | null              |
| marketing    | posts               | scheduled_date            | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | posts               | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | posts               | updated_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | posts               | deleted_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | posts               | categoria_id              | uuid                     | YES         | FOREIGN KEY     | public            | blog_categorias  | id                |
| marketing    | production_versions | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| marketing    | production_versions | production_id             | uuid                     | YES         | FOREIGN KEY     | marketing         | productions      | id                |
| marketing    | production_versions | content                   | jsonb                    | NO          | null            | null              | null             | null              |
| marketing    | production_versions | prompt                    | text                     | YES         | null            | null              | null             | null              |
| marketing    | production_versions | timestamp                 | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | production_versions | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | production_versions | updated_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | production_versions | deleted_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | productions         | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| marketing    | productions         | title                     | text                     | YES         | null            | null              | null             | null              |
| marketing    | productions         | config                    | jsonb                    | NO          | null            | null              | null             | null              |
| marketing    | productions         | planner_item_id           | uuid                     | YES         | FOREIGN KEY     | marketing         | planner_items    | id                |
| marketing    | productions         | last_updated              | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | productions         | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | productions         | updated_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | productions         | deleted_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | team_members        | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| marketing    | team_members        | name                      | text                     | NO          | null            | null              | null             | null              |
| marketing    | team_members        | email                     | text                     | NO          | null            | null              | null             | null              |
| marketing    | team_members        | role                      | USER-DEFINED             | YES         | null            | null              | null             | null              |
| marketing    | team_members        | status                    | text                     | YES         | null            | null              | null             | null              |
| marketing    | team_members        | avatar_url                | text                     | YES         | null            | null              | null             | null              |
| marketing    | team_members        | whatsapp                  | text                     | YES         | null            | null              | null             | null              |
| marketing    | team_members        | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | team_members        | invitation                | USER-DEFINED             | YES         | null            | null              | null             | null              |
| marketing    | team_members        | invited_team_id           | uuid                     | YES         | FOREIGN KEY     | marketing         | teams            | id                |
| marketing    | team_members        | user_id                   | uuid                     | YES         | FOREIGN KEY     | identity          | user_profiles    | user_id           |
| marketing    | team_members        | updated_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | team_members        | deleted_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | teams               | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| marketing    | teams               | name                      | text                     | NO          | null            | null              | null             | null              |
| marketing    | teams               | description               | text                     | YES         | null            | null              | null             | null              |
| marketing    | teams               | can_view                  | boolean                  | YES         | null            | null              | null             | null              |
| marketing    | teams               | can_edit                  | boolean                  | YES         | null            | null              | null             | null              |
| marketing    | teams               | can_create                | boolean                  | YES         | null            | null              | null             | null              |
| marketing    | teams               | can_delete                | boolean                  | YES         | null            | null              | null             | null              |
| marketing    | teams               | accessible_pages          | ARRAY                    | YES         | null            | null              | null             | null              |
| marketing    | teams               | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | teams               | updated_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| marketing    | teams               | deleted_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| public       | ativador            | id                        | bigint                   | NO          | PRIMARY KEY     | null              | null             | null              |
| public       | ativador            | created_at                | timestamp with time zone | NO          | null            | null              | null             | null              |
| public       | blog_categorias     | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| public       | blog_categorias     | nome                      | text                     | NO          | UNIQUE          | null              | null             | null              |
| public       | blog_categorias     | slug                      | text                     | NO          | UNIQUE          | null              | null             | null              |
| public       | blog_posts          | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| public       | blog_posts          | titulo                    | text                     | NO          | null            | null              | null             | null              |
| public       | blog_posts          | resumo                    | text                     | YES         | null            | null              | null             | null              |
| public       | blog_posts          | conteudo                  | text                     | NO          | null            | null              | null             | null              |
| public       | blog_posts          | autor                     | text                     | NO          | null            | null              | null             | null              |
| public       | blog_posts          | data_publicacao           | date                     | NO          | null            | null              | null             | null              |
| public       | blog_posts          | categoria_id              | uuid                     | YES         | FOREIGN KEY     | public            | blog_categorias  | id                |
| public       | blog_posts          | imagem_url                | text                     | YES         | null            | null              | null             | null              |
| public       | blog_posts          | tags                      | ARRAY                    | YES         | null            | null              | null             | null              |
| public       | blog_posts          | slug                      | text                     | YES         | null            | null              | null             | null              |
| public       | blog_posts          | deleted_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| public       | keep_alive          | id                        | integer                  | NO          | PRIMARY KEY     | null              | null             | null              |
| public       | keep_alive          | created_at                | timestamp with time zone | YES         | null            | null              | null             | null              |
| topstack     | acess               | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| topstack     | acess               | plataforma                | text                     | YES         | null            | null              | null             | null              |
| topstack     | acess               | login                     | text                     | YES         | null            | null              | null             | null              |
| topstack     | acess               | senha                     | character varying        | YES         | null            | null              | null             | null              |
| topstack     | acess               | descricao                 | text                     | YES         | null            | null              | null             | null              |
| topstack     | dev_config          | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| topstack     | dev_config          | created_at                | timestamp with time zone | NO          | null            | null              | null             | null              |
| topstack     | dev_config          | nome                      | text                     | NO          | null            | null              | null             | null              |
| topstack     | dev_config          | config                    | jsonb                    | YES         | null            | null              | null             | null              |
| vault        | secrets             | id                        | uuid                     | NO          | PRIMARY KEY     | null              | null             | null              |
| vault        | secrets             | name                      | text                     | YES         | null            | null              | null             | null              |
| vault        | secrets             | description               | text                     | NO          | null            | null              | null             | null              |
| vault        | secrets             | secret                    | text                     | NO          | null            | null              | null             | null              |
| vault        | secrets             | key_id                    | uuid                     | YES         | null            | null              | null             | null              |
| vault        | secrets             | nonce                     | bytea                    | YES         | null            | null              | null             | null              |
| vault        | secrets             | created_at                | timestamp with time zone | NO          | null            | null              | null             | null              |
| vault        | secrets             | updated_at                | timestamp with time zone | NO          | null            | null              | null             | null              |