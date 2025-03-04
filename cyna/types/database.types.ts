export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  api: {
    Tables: {
      address: {
        Row: {
          city: string
          country: string
          created_at: string | null
          first_address: string
          id: number
          phone_number: string
          postal_code: string
          region: string
          second_address: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          city: string
          country: string
          created_at?: string | null
          first_address: string
          id?: number
          phone_number: string
          postal_code: string
          region: string
          second_address?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          city?: string
          country?: string
          created_at?: string | null
          first_address?: string
          id?: number
          phone_number?: string
          postal_code?: string
          region?: string
          second_address?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      carousels: {
        Row: {
          created_at: string | null
          group_image: number
          id: number
          image_id: number
          order_image: number
        }
        Insert: {
          created_at?: string | null
          group_image: number
          id?: number
          image_id: number
          order_image: number
        }
        Update: {
          created_at?: string | null
          group_image?: number
          id?: number
          image_id?: number
          order_image?: number
        }
        Relationships: [
          {
            foreignKeyName: "carousels_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          description: string
          id: number
          image_id: number
          name: string
          priority: number | null
          stock: number
          visibility: boolean | null
        }
        Insert: {
          description: string
          id?: number
          image_id: number
          name: string
          priority?: number | null
          stock?: number
          visibility?: boolean | null
        }
        Update: {
          description?: string
          id?: number
          image_id?: number
          name?: string
          priority?: number | null
          stock?: number
          visibility?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
        ]
      }
      chatbot: {
        Row: {
          created_at: string | null
          id: number
          question: string
          response: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          question: string
          response: string
        }
        Update: {
          created_at?: string | null
          id?: number
          question?: string
          response?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          created_at: string | null
          email: string
          id: number
          message: string
          subject: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          message: string
          subject: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          message?: string
          subject?: string
        }
        Relationships: []
      }
      images: {
        Row: {
          created_at: string | null
          id: number
          image_url: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          image_url: string
        }
        Update: {
          created_at?: string | null
          id?: number
          image_url?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          address_id: number
          created_at: string | null
          id: number
          number_order: string
          stripe_payment_method_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          address_id: number
          created_at?: string | null
          id?: number
          number_order: string
          stripe_payment_method_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          address_id?: number
          created_at?: string | null
          id?: number
          number_order?: string
          stripe_payment_method_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_products: {
        Row: {
          date_end: string | null
          date_start: string | null
          order_id: number
          product_id: number
          quantity: number
          status: "0" | "1" | "2" | null
          subscription_id: number | null
          total_price: number
          updated_at: string | null
        }
        Insert: {
          date_end?: string | null
          date_start?: string | null
          order_id: number
          product_id: number
          quantity: number
          status?: "0" | "1" | "2" | null
          subscription_id?: number | null
          total_price: number
          updated_at?: string | null
        }
        Update: {
          date_end?: string | null
          date_start?: string | null
          order_id?: number
          product_id?: number
          quantity?: number
          status?: "0" | "1" | "2" | null
          subscription_id?: number | null
          total_price?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_products_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_products_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          available: boolean
          best_product: boolean
          best_product_priority: number | null
          category_id: number | null
          created_at: string | null
          description: string
          description_technical: string
          id: number
          level_support: string
          name: string
          performance: string
          price: number
          priority: number | null
          promotion_id: number | null
          scalability: string
          updated_at: string | null
        }
        Insert: {
          available?: boolean
          best_product?: boolean
          best_product_priority?: number | null
          category_id?: number | null
          created_at?: string | null
          description: string
          description_technical: string
          id?: number
          level_support: string
          name: string
          performance: string
          price: number
          priority?: number | null
          promotion_id?: number | null
          scalability: string
          updated_at?: string | null
        }
        Update: {
          available?: boolean
          best_product?: boolean
          best_product_priority?: number | null
          category_id?: number | null
          created_at?: string | null
          description?: string
          description_technical?: string
          id?: number
          level_support?: string
          name?: string
          performance?: string
          price?: number
          priority?: number | null
          promotion_id?: number | null
          scalability?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "promotions"
            referencedColumns: ["id"]
          },
        ]
      }
      products_images: {
        Row: {
          created_at: string | null
          image_id: number
          product_id: number
        }
        Insert: {
          created_at?: string | null
          image_id: number
          product_id: number
        }
        Update: {
          created_at?: string | null
          image_id?: number
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_images_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_images_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      promotions: {
        Row: {
          created_at: string | null
          date_end: string
          date_start: string
          description: string | null
          discount_type: "percentage" | "fixed" | "free_months" | "cart"
          discount_value: number
          id: number
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date_end: string
          date_start: string
          description?: string | null
          discount_type: "percentage" | "fixed" | "free_months" | "cart"
          discount_value: number
          id?: number
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date_end?: string
          date_start?: string
          description?: string | null
          discount_type?: "percentage" | "fixed" | "free_months" | "cart"
          discount_value?: number
          id?: number
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string | null
          id: number
          name: string
          price: number
          promotion_id: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          price: number
          promotion_id?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          price?: number
          promotion_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "promotions"
            referencedColumns: ["id"]
          },
        ]
      }
      titles: {
        Row: {
          description: string
          id: number
        }
        Insert: {
          description: string
          id?: number
        }
        Update: {
          description?: string
          id?: number
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string | null
          currency: string
          id: number
          order_id: number
          payment_provider: string
          payment_provider_id: string
          status: "0" | "1" | "2" | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency: string
          id?: number
          order_id: number
          payment_provider: string
          payment_provider_id: string
          status?: "0" | "1" | "2" | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string
          id?: number
          order_id?: number
          payment_provider?: string
          payment_provider_id?: string
          status?: "0" | "1" | "2" | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          firstname: string | null
          id: string
          isguest: boolean
          lastname: string | null
          password: string | null
          role: "user" | "admin" | "superadmin" | null
          stripe_customer_id: string | null
          subscription_id: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          firstname?: string | null
          id: string
          isguest: boolean
          lastname?: string | null
          password?: string | null
          role?: "user" | "admin" | "superadmin" | null
          stripe_customer_id?: string | null
          subscription_id?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          firstname?: string | null
          id?: string
          isguest?: boolean
          lastname?: string | null
          password?: string | null
          role?: "user" | "admin" | "superadmin" | null
          stripe_customer_id?: string | null
          subscription_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
