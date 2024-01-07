# frozen_string_literal: true

class BackendSchema < GraphQL::Schema
  query(Types::QueryType)
  mutation(Types::MutationType)
end
