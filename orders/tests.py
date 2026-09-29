from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient


class GetUsersTests(TestCase):
	def setUp(self):
		self.client = APIClient()
		User.objects.create_user(username='magamet', email='test@gmail.com', password='pass')
		User.objects.create_user(username='magomed', email='magomed@gmail.com', password='pass')
		User.objects.create_user(username='ali', email='ali@example.com', password='pass')

	def test_filters_username_and_email_together(self):
		response = self.client.get('/api/users/', {'search': 'mag', 'email': 'gmail'})

		self.assertEqual(response.status_code, 200)
		self.assertEqual(
			response.json(),
			[
				{'id': 1, 'username': 'magamet', 'email': 'test@gmail.com'},
				{'id': 2, 'username': 'magomed', 'email': 'magomed@gmail.com'},
			],
		)

	def test_empty_search_returns_all_users(self):
		response = self.client.get('/api/users/')

		self.assertEqual(response.status_code, 200)
		self.assertEqual(len(response.json()), 3)
