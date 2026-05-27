process.env.NODE_ENV = 'test';
process.env.DATABASE_PATH = ':memory:';
process.env.JWT_SECRET = 'test_secret_only_for_unit_tests_do_not_use_in_production';
process.env.JWT_EXPIRES_IN = '3600';
