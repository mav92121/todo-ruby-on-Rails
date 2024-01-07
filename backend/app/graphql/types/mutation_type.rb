# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_todo, Types::TodoType, null: false do
      argument :title, String, required: true
      argument :content, String, required: true
    end

    def create_todo(title:,content:)
      Todo.create!(title:title,content:content)
    end

    field :update_todo, Types::TodoType, null: false do
      argument :id, ID, required:true
      argument :title, String, required:true
      argument :content, String, required:true
    end

    def update_todo(id:,title:,content:)
      currTodo=Todo.find(id)
      currTodo.update(title:title,content:content)
      currTodo # showing current updatedtodo
    end

    field :delete_todo, Boolean, null: false do
      argument :id, ID, required:true
    end
    def delete_todo(id:)
      Todo.find(id).destroy
      true
    end
  end
end
