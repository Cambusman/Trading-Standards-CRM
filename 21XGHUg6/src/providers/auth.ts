import { AuthBindings } from "@refinedev/core";
import { supabaseClient } from "../utility/supabaseClient";

export const authProvider: AuthBindings = {
  login: async ({ email, password }) => {
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return {
          success: false,
          error,
        };
      }

      if (data?.user) {
        return {
          success: true,
          redirectTo: "/",
        };
      }

      return {
        success: false,
        error: {
          message: "Login failed",
          name: "Invalid email or password",
        },
      };
    } catch (error: any) {
      return {
        success: false,
        error,
      };
    }
  },
  register: async ({ email, password }) => {
    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
      });

      if (error) {
        return {
          success: false,
          error,
        };
      }

      if (data) {
        return {
          success: true,
          redirectTo: "/",
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: false,
      error: {
        message: "Register failed",
        name: "Invalid email or password",
      },
    };
  },
  forgotPassword: async ({ email }) => {
    try {
      const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) {
        return {
          success: false,
          error,
        };
      }

      if (data) {
        return {
          success: true,
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: false,
      error: {
        message: "Failed to send reset password email",
        name: "Invalid email",
      },
    };
  },
  updatePassword: async ({ password }) => {
    try {
      const { data, error } = await supabaseClient.auth.updateUser({
        password,
      });

      if (error) {
        return {
          success: false,
          error,
        };
      }

      if (data) {
        return {
          success: true,
          redirectTo: "/",
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: false,
      error: {
        message: "Failed to update password",
        name: "Invalid password",
      },
    };
  },
  logout: async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: true,
      redirectTo: "/login",
    };
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
  check: async () => {
    try {
      const { data } = await supabaseClient.auth.getSession();
      const { session } = data;

      if (!session) {
        return {
          authenticated: false,
          error: {
            message: "Session not found",
            name: "Not authenticated",
          },
          logout: true,
          redirectTo: "/login",
        };
      }
    } catch (error: any) {
      return {
        authenticated: false,
        error: error || {
          message: "Session not found",
          name: "Not authenticated",
        },
        logout: true,
        redirectTo: "/login",
      };
    }

    return {
      authenticated: true,
    };
  },
  getPermissions: async () => {
    const { data } = await supabaseClient.auth.getUser();
    if (data?.user) {
      return data.user.role;
    }
    return null;
  },
  getIdentity: async () => {
    const { data } = await supabaseClient.auth.getUser();
    if (data?.user) {
      return {
        ...data.user,
        name: data.user.email,
      };
    }
    return null;
  },
};
